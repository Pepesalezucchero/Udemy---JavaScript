'use strict';

/*
Coding Challenge #2

Your tasks:

PART 1
1. Write an async function 'loadNPause' that recreates Challenge #2,
   this time using async/await (only the part where the promise is consumed, reuse the createImage' function from before)
2. Compare the two versions, think about the big differences,
   and see which one you like more
3. Don't forget to test the error handler, and to set the network speed to “Fast 3G” in the dev tools Network tab

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'
2. Use .map to loop over the array, to load all the images with the 'createImage' function
   (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array
5. Add the 'parallel' class to all the images (it has some CSS styles)

Test data Part 2:
['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'].
To test, turn off the 'loadNPause' function
*/


// Coding challenge 2#

// let currentImg;

// createImage('img/img-1.jpg')
// //Task 4
// .then(img => {
//     currentImg = img;
//     console.log('Image loaded', img.src)
//     //Task 5
//     return wait(2);
// })
// //Task 6
// .then(() => {
//    currentImg.style.display = 'none';
//    return createImage('img/img-2.jpg');
// })
// .then(img => {
//     currentImg = img;
//     console.log('Image loaded', img.src);
//     //Task 7
//     return wait(2);
// })
// //Task 8
// .then(() => {
//     currentImg.style.display = 'none';
// })
// .catch(err => console.error(`${err.message}`));

const imageContainer = document.querySelector('.images');

function wait(seconds) {
    return new Promise(function(resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

function createImage(imgPath) {
    return new Promise(function(resolve, reject){
        const image = document.createElement('img');
        image.src = imgPath;

        //Task 2
        image.addEventListener('load', function () {
            imageContainer.append(image);
            resolve(image);
        });

        image.addEventListener('error', function () {
            reject(new Error('Failed to load image at ' + imgPath));
        });
    });
}

//PART 1

//Task 1
const loadNPause = async function() {
    try {
        let img = await createImage('img/img-1.jpg');
        console.log('Image loaded', img.src);
        await wait(2);
        img.style.display = 'none';

        img = await createImage('img/img-2.jpg');
        console.log('Image loaded', img.src);
        await wait(2);
        img.style.display = 'none';

    //Task 3
    } catch(err) {
        console.error(`${err.message}`);
    }
}

// loadNPause();

//Task 2 
/* The sync/await version is more clear and simple to undestand,
   the big difference is that we don't need to use the variable outside the async function
   cause all the code is in the same scope. 
*/

//PART 2

//Task 1
const loadAll = async function(imgArr) {
    try {
        //Task 2
        const imgs = imgArr.map(img => createImage(img));
        //Task 3
        console.log(imgs);

        //Task 4
        const imgEl = await Promise.all(imgs);
        console.log(imgEl);

        //Task 5
        imgEl.forEach(img => img.classList.add('parallel'));

    } catch(err) {
        console.error(`${err.message}`);
    }
}

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);