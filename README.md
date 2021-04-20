# 🚀 QA AUTOMATION CAMP - CI&T 2021 🚀

## The Challenge

The challenge of this bootcamp, was automate tests from an application web and an REST API.

## [Cypress Tests](https://docs.cypress.io/)
The tests in Cypress was done by the QAs that was participating of bootcamp.
### Requirements Cypress

To use cypress is necessary to have install in your machine NodeJs and NPM.

#### Ubuntu install

- NodeJS and NPM
```
    sudo apt install nodejs
```
- Verifying the version of Node and npm:
```
    node -v or node --version
    npm -v or npm --version
```
- Install and execute Cypress:
```
	npm init
	npm install cypress --dev
	npx cypress open
```

#### Windows install

- NodeJs and NPM: acess [NodeJS website](https://nodejs.org/en/), and download the version LTS 
- Verifying the version of Node and npm:
```
    node -v or node --version
    npm -v or npm --version
```
- Install and execute Cypress:
```
	npm init
	npm install cypress --dev
	npx cypress open
```
#### [Fixtures](https://docs.cypress.io/api/commands/fixture#Arguments)

The command "Fixtures" of cypress was used to get data from a json file and this data was used in Requests.
```
    beforeEach(() => {
        cy.fixture("bodyrequest").then(function(bodyrequest){
            globalThis.bodyrequest = bodyrequest
        });
        cy.fixture("responserequest").then(function(responserequest){
            globalThis.responserequest = responserequest
        })
    }) //Get the data of json file and set in an variable that can be used in all tests!

        it("Request with body correct", ()=> {
        cy.RequestPost(bodyrequest.body_valid).as('requisicao') // Make an request
        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.messages).to.deep.equal(responserequest.valid.messages)
        })
    });
```

#### [Commands](https://docs.cypress.io/api/cypress-api/custom-commands)
The file [commands.js](https://github.com/aliciamarianne1507/bootcamp-ciandt/blob/master/cypress/support/commands.js) was used to create commands in cypress, functions, that we could called them and used in our tests.

```
    Cypress.Commands.add('RequestPost',(body)=>{
        const url_request = 'http://52.175.253.71:8080/brewery/rate'
        cy.request({
            method: 'POST',
            url : url_request,
            body: body,
            failOnStatusCode: false
        })
    })

Using:

        it("Request with body correct", ()=> {
        cy.RequestPost(bodyrequest.body_valid).as('requisicao') // Make an request
        cy.get('@requisicao').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.messages).to.deep.equal(responserequest.valid.messages)
        })
    });
```

## [REST Assured Tests](https://rest-assured.io/)

The tests in REST Assured was done by me.

### Requirements REST Assured

You'll need to have installed in your machine:
- Java JDK
- Maven
- VS Code extensions:
    - [Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack)
    - [code-groovy](https://marketplace.visualstudio.com/items?itemName=marlon407.code-groovy)

#### Creating a project Maven:

First, verify your Maven version:

```
    mvn -v or mvn --version
```
If you don't have Maven in you machine, you can install it in: [Maven website](https://maven.apache.org/download.cgi)

After install Maven and the extensions in your VS Code, to create an Maven Project, you should:

1-Press Ctrl+Shift+P and type: Create an Maven Project

2-The archetype "maven-archetype-quickstart"

3-Version: The last one

After that, you choose the folder where your project will be, and the project will start to be created.
In your terminal, you should input:

-groupId: com."as_your_wish"

-artifactId: "the name of your project"

And that is, your project is created and you can start to write your tests.
