import { ImageAnnotatorClient } from '@google-cloud/vision';

// Google Cloud Vision API: analyze the content of images using Google’s machine learning models
// letting you send images and receive AI-generated descriptions, labels, texts, or detected objects
const client = new ImageAnnotatorClient();

function detectFace(fileName: string) {
    console.log(`Running logo detection on ${fileName}`);
    client.logoDetection(fileName)
    .then(([result]) => {
        let scores: number[] = [];
        const logos = result.logoAnnotations;
        logos?.forEach((logo) => {
            if (logo.description)
                console.log(`"${logo.description}" found in in file ${fileName}`);
            if (logo.score)
                scores.push(logo.score);
        });
        const avg = scores.reduce((a, b) => a + b) / scores.length;
        console.log(`Average score for ${fileName}: ${avg}`);
    })
    .catch((err) => {
        if (err.code == 'ENOENT')
            console.error(`File ${fileName} not found`);
    });
}

/**
 * Runs logo detection on the given list of file names and logs the description and average score of each logo.
 * @param fileNames - An array of file names to run logo detection on.
 * @returns void
 */
function main (fileNames: string[]): void {
    fileNames.forEach((fileName: string) => {
        console.log(`Running logo detection on ${fileName}`);
        client.logoDetection(fileName)
        .then(([result]) => {
            let scores: number[] = [];
            const logos = result.logoAnnotations;
            // ?. is used to check if logos is undefined or null (only process if it is not null/undefined)
            // .forEach((logo) => { ... }) iterates over each logo in the logos array (logo -> input)
            logos?.forEach((logo) => {
                if (logo.description)
                    console.log(`"${logo.description}" found in in file ${fileName}`);
                if (logo.score)
                    scores.push(logo.score);
            });
            const avg = scores.reduce((a, b) => a + b) / scores.length;
            console.log(`Average score for ${fileName}: ${avg}`);
        })
        .catch((err) => {
            if (err.code === 'ENOENT')
                console.error(`File ${fileName} not found`);
            else if (err.code == 7)
                console.error(err.details);
        });
    });
}

async function detectFaceAsync(fileName: string) {
    let result = (await client.logoDetection(fileName))[0];
    let scores: number[] = [];
    const logos = result.logoAnnotations;
    logos?.forEach((logo) => {
        if (logo.description)
            console.log(`"${logo.description}" found in in file ${fileName}`);
        if (logo.score)
            scores.push(logo.score);
    });
    const avg = scores.reduce((a, b) => a + b) / scores.length;
    console.log(`Average score for ${fileName}: ${avg}`);

}

// Implement the async version of the above here
// Your version should not use .then and should use try/catch instead of .catch
async function mainAsync(fileNames: string[]): Promise<void> {
    // console.error(new Error("mainAsync not implemented"));
    // Your code here
    for (const fileName of fileNames) {
        console.log(`Running logo detection on ${fileName}`);
        try{
            await detectFaceAsync(fileName);
        } catch (err: any) {
            if (err.code === 'ENOENT')
                console.error(`File ${fileName} not found`);
            else if (err.code == 7)
                console.error(err.details);
        }
    };

}

main([
    './images/cmu.jpg', 
    './images/logo-types-collection.jpg', 
    './images/not-a-file.jpg'
]);

// Sleep for a second
await new Promise(r => setTimeout(r, 1000));

mainAsync([
    './images/cmu.jpg', 
    './images/logo-types-collection.jpg', 
    './images/not-a-file.jpg'
]);
