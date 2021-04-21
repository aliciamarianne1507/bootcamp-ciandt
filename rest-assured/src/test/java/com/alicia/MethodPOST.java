package com.alicia;

import static io.restassured.RestAssured.*;

import java.io.File;

import org.junit.Test;
import io.restassured.http.ContentType;


/**
 * Testes de BackEnd - Método POST
 */
public class MethodPOST{
    @Test
    public void body_request_empty(){
        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body("")
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(400);
    }

    @Test
    public void body_request_correct(){
        File file = new File("src/resources/bodyvalid.json");

        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(200)
            .extract().path("messages")
            .equals("[Um brinde. Sua avaliação foi adicionada com sucesso.]");
    }

    @Test
    public void body_request_incorrect(){
        File file = new File("src/resources/bodyincorrect.json");

        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(400)
            .extract().path("messages")
            .equals("[Não foi encontrado registros para a cervejaria informada.]");
    }

    @Test
    public void email_already_used(){
        File file = new File("src/resources/emailused.json");

        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(400)
            .extract().path("messages")
            .equals("[Você já avaliou essa cervejaria.]");
    }

    @Test
    public void email_invalid(){
        File file = new File("src/resources/emailinvalid.json");

        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(400)
            .extract().path("messages")
            .equals("[Por favor inserir um email válido.]");
    }
    @Test
    public void brewery_id_invalid(){
        File file = new File("src/resources/breweryidinvalid.json");

        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(400)
            .extract().path("messages")
            .equals("[Não foi encontrado registros para a cervejaria informada.]");
    }
    @Test
    public void value_invalid(){
        File file = new File("src/resources/valueinvalid.json");

        given()
            .baseUri("http://52.175.253.71:8080")
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post("/brewery/rate").
        then()
            .statusCode(400)
            .extract().path("messages")
            .equals("[O valor da avaliação deve estar entre 1 e 5.]");
    }
    @Test
    public void method_invalid_put(){
            given()
                .baseUri("http://52.175.253.71:8080")
            .when().
                put("/brewery/rate")
            .then()
                .statusCode(405)
                .extract().path("error")
                .equals("Not Found");
    }
    @Test
    public void method_invalid_get(){
            given()
                .baseUri("http://52.175.253.71:8080")
            .when().
                put("/brewery/rate")
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
                put("/brewery/rate")
            .then()
                .statusCode(405)
                .extract().path("error")
                .equals("Not Found");
    }

}
