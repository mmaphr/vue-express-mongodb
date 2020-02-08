describe("api/member",  function(){

    it("Should post gender success", function(){
        cy.request({
            url: "http://localhost:3000/genders",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:{
                _id: "5e38f45a0f65501798d2as21",
                gendername: "TestGender",
            },
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(201)
        })
    })

    it("Should post member success", function(){
        cy.request({
            url: "http://localhost:3000/members",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:{
                _id: "5e38fc0ca76fbe4c60ece34d",
                firstname: "TestMember",
                lastname: "testmem",
                age: 22,
                sex: "5e38f45a0f65501798d2as21"
            },
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(201)
        })
    })

    it("Should post gender fail", function(){
        cy.request({
            url: "http://localhost:3000/genders",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:{
                gednername: ""
            },
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(500)
        })
    })

    it("Should post member fail", function(){
        cy.request({
            url: "http://localhost:3000/members",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:{
                firstname: "Test",
                lastname: "",
                age: 22,
                sex: "5e38f45a0f65501798d200b1"
            },
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(500)
        })
    })

    it("Should get member success", function(){
        cy.request({
            url: "http://localhost:3000/members",
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
            body:{},
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(200)
        })
    })

    it("Should get gender success", function(){
        cy.request({
            url: "http://localhost:3000/genders",
            method: "Get",
            headers: {
                "Content-Type": "application/json"
            },
            body:{},
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(200)
        })
    })

    it("Should delete member success", function(){
        cy.request({
            url: "http://localhost:3000/members/5e38fc0ca76fbe4c60ece34d",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body:{  },
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(200)
        })
    })

    it("Should delete gender success", function(){
        cy.request({
            url: "http://localhost:3000/members/5e38f45a0f65501798d2as21",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body:{  },
            failOnStatusCode: false
        })
        .then(function(response){
            expect(response.status).to.be.eq(200)
        })
    })
   

    
})