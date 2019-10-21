import axios from 'axios'

export default{
    getMember() {
        return axios.get("http://localhost:3000/members").then(response => response.data);
    },
    getGender() {
        return axios.get("http://localhost:3000/genders").then(response => response.data);
    },
    postMember(firstname, lastname, age, genderId) {   
        return axios.post("http://localhost:3000/members",{
            firstname: firstname,
            lastname: lastname,
            age: parseInt(age),
            genderId: genderId
        }).then(response => {
            console.log(response.data)
        })
            .catch(function (error) {
            console.log(error)
        });
    },
    deleteMember(id) {
        const url = `http://localhost:3000/members/` + id;
        return axios.delete(url).then(function (response) {
            console.log("Deleted"+response)
        })
            .catch(function (error) {
                console.log(error)
        });
    },
    
}