import React, { useState } from "react";
import './table.css'


const sleep = (milliSeconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliSeconds))
}


const Table = () => {

    let arraySize = 80;
    const [squareArray, setSquareArray] = useState([298, 375, 369, 162, 7, 529, 269, 503, 385, 479, 386, 264, 480, 275, 513, 121, 148, 191, 313, 596, 502, 215, 411, 40, 347, 134, 546, 435, 574, 522, 281, 351, 79, 61, 224, 71, 12, 528, 203, 83, 559, 303, 401, 455, 353, 209, 72, 19, 154, 483, 525, 453, 555, 500, 155, 345, 135, 16, 31, 572, 205, 511, 62, 96, 310, 436, 187, 53, 350, 600, 505, 515, 545, 92, 112, 195, 295, 294, 120, 1]);
    const [sortedArray, setSortedArray] = useState(false);
    const [searchNumber, setSeacrhNumber] = useState(0);

    const swap = (poz1, poz2, arr) => {
        let aux = arr[poz1];
        arr[poz1] = arr[poz2];
        arr[poz2] = aux;
    }

    const generateSortedArray = async () => {
        let arr = []
        for (let i = 0; i < arraySize; i++) {
            arr.push(randomIntFromInterval(1, 600));
            let square = document.getElementById(i).style;
            square.backgroundColor = '#088395';
        }

        for (let i = 0; i < arr.length - 1; i++) {
            let min = i;
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[min]) {
                    min = j;
                }
            }
            if (min !== i) {
                swap(i, min, arr);

            }
        }

        setSquareArray(arr)
        setSortedArray(true)
    }

    const generateRandomArray = async () => {
        let arr = []
        for (let i = 0; i < arraySize; i++) {
            arr.push(randomIntFromInterval(1, 600));
            let square = document.getElementById(i).style;
            square.backgroundColor = '#088395';
        }

        setSortedArray(false)
        setSquareArray(arr)
    }


    const linearSearch = async () => {

        for (let i = 0; i < arraySize; i++) {
            let square = document.getElementById(i).style;
            square.backgroundColor = '#00f4ff';

            console.log(searchNumber)
            console.log(squareArray[i]);

            if (searchNumber == squareArray[i]) {
                square.backgroundColor = 'green'
                console.log(squareArray[i]);
                console.log(searchNumber)
                return;
            }

            await sleep(75)
            square.backgroundColor = '#088395';
        }
        alert("Nu este bos");
    }

    const binarySearch = async () => {
        if (sortedArray) {
            let left = 0;
            let right = arraySize - 1;
            let middle;

            while (right >= left) {
                middle = left + Math.floor((right - left) / 2)
                let lSide = document.getElementById(left).style;
                lSide.backgroundColor = 'yellow';
                let rSide = document.getElementById(right).style;
                rSide.backgroundColor = 'yellow';

                for (let i = left+1 ; i < right; i++) {
                    let sq = document.getElementById(i).style;
                    sq.backgroundColor = '#00f4ff';
                }

                console.log(squareArray[middle]);
                    console.log(searchNumber)


                if (squareArray[middle] == searchNumber) {
                    let square = document.getElementById(middle).style;
                    square.backgroundColor = 'green';
                    console.log(squareArray[middle]);
                    console.log(searchNumber)
                    return;
                }

                await sleep(400);
                for (let i = left+1 ; i < right; i++) {
                    let sqr = document.getElementById(i).style;
                    sqr.backgroundColor = '#088395';
                }
                
                if (squareArray[middle] > searchNumber) {
                    right = middle - 1;
                } else {
                    left = middle + 1;
                }

                lSide.backgroundColor = '#088395';     
                rSide.backgroundColor = '#088395';            
            }
            alert("Nu este bos");
        } else {
            alert("Array should be sorted");
        }
    }

    return (
        <div className="container">
            <div className="btn-container">
                <h1>{searchNumber}</h1>
                <button className="btn" onClick={() => { generateSortedArray(); console.log(squareArray); console.log(sortedArray) }}>Generate sorted array</button>
                <button className="btn" onClick={() => { generateRandomArray(); console.log(squareArray); console.log(sortedArray) }}>Generate random array</button>
                <button className="btn" onClick={() => { linearSearch(); }}>Linear search</button>
                <button className="btn" onClick={() => { binarySearch(); }}>Binary search</button>
                <input type="number" name="text" className="input" placeholder="Insert number" onChange={newNumber => setSeacrhNumber(newNumber.target.value)}></input>
            </div>
            <div className="table">
                {squareArray.map((value, id) => (
                    <div className="square" key={id} id={id}>{value}</div>))}
            </div>
        </div>
    );
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export default Table;