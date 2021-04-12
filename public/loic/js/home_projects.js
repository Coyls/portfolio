import { requestProjects } from './request.js'  


export const homeProjectsCreation = () => {

    requestProjects().then(response => {

        const data = response.data;
        const dataLenght = data.length;

        console.log(data.length)

        

        for (let i = 0; i < 4; i++) {
            const element = data[i];

            console.log(element)
            
        }

    })



}