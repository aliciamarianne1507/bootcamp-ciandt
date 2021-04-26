package com.restassured;

import io.restassured.RestAssured;
import org.hamcrest.Matchers;
import org.junit.BeforeClass;
import org.junit.Test;

import static io.restassured.RestAssured.given;

/**
 * Testes de BackEnd - Método GET
 */
public class MethodGET{
    @BeforeClass
    public static void variables(){
        RestAssured.baseURI = "http://52.175.253.71:8080";
        RestAssured.basePath = "/brewery/list/";
    }

    @Test
    public void city_valid(){
        given()
                .when()
                    .get("/Portland")
                .then()
                    .statusCode(200);
    }

    @Test
    public void invalid_city(){
    given()
    .when()
        .get("/A").
    then()
        .statusCode(400)
            .extract().path("messages")
            .equals("[A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados.]");    }

    @Test
    public void no_breweries(){
    given()
    .when()
        .get("/Addy").
    then()
        .statusCode(400)
            .extract().path("messages")
            .equals("[A lista de cervejarias não foi encontrada.Por favor, verifique sua pesquisa e tente novamente para obter resultados.]");    }

    @Test
    public void no_city(){
    given()
    .when()
        .get("").
    then()
        .statusCode(404)
            .body("error", Matchers.is("Not Found"));
    }

    @Test
    public void method_invalid_put(){
            given()
            .when().
                put("Portland")
            .then()
                .statusCode(405)
                    .body("error", Matchers.is("Method Not Allowed"));
    }
    @Test
    public void method_invalid_post(){
            given()
            .when().
                put("/Portland")
            .then()
                .statusCode(405)
                    .body("error", Matchers.is("Method Not Allowed"));
    }
    @Test
    public void method_invalid_delete(){
            given()
            .when().
                put("/Portland")
            .then()
                .statusCode(405)
                    .body("error", Matchers.is("Method Not Allowed"));
    }
}

