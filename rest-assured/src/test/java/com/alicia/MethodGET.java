package com.alicia;

import static io.restassured.RestAssured.*;

import org.junit.Test;


/**
 * Testes de BackEnd - Método GET
 */
public class MethodGET{
    @Test
    public void city_valid(){
        given()
            .baseUri("http://52.175.253.71:8080")
        .when()
            .get("/brewery/list/Portland").
        then()
            .statusCode(200); //Missing body validation
    }

    @Test
    public void invalid_city(){
    given()
        .baseUri("http://52.175.253.71:8080")
    .when()
        .get("/brewery/list/A").
    then()
        .statusCode(400)
        .extract().path("messages")
        .equals("[A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados.]");
    }

    @Test
    public void no_breweries(){
    given()
        .baseUri("http://52.175.253.71:8080")
    .when()
        .get("/brewery/list/Addy").
    then()
        .statusCode(400)
        .extract().path("messages")
        .equals("[A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados.]");
    }

    @Test
    public void no_city(){
    given()
        .baseUri("http://52.175.253.71:8080")
    .when()
        .get("/brewery/list/").
    then()
        .statusCode(404)
        .extract().path("error")
        .equals("Not Found");
    }

    @Test
    public void method_invalid_put(){
            given()
                .baseUri("http://52.175.253.71:8080")
            .when().
                put("/brewery/list/Portland")
            .then()
                .statusCode(405)
                .extract().path("error")
                .equals("Not Found");
    }
    @Test
    public void method_invalid_post(){
            given()
                .baseUri("http://52.175.253.71:8080")
            .when().
                put("/brewery/list/Portland")
            .then()
                .statusCode(405)
                .extract().path("error")
                .equals("Not Found");
    }
    @Test
    public void method_invalid_delete(){
            given()
                .baseUri("http://52.175.253.71:8080")
            .when().
                put("/brewery/list/Portland")
            .then()
                .statusCode(405)
                .extract().path("error")
                .equals("Not Found");
    }

}
