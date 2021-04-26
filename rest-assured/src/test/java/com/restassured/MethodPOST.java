package com.restassured;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import org.hamcrest.Matchers;
import org.junit.BeforeClass;
import org.junit.Test;

import java.io.File;

import static io.restassured.RestAssured.given;


/**
 * Testes de BackEnd - Método POST
 */
public class MethodPOST{

    @BeforeClass
    public static void variables(){
        RestAssured.baseURI = "http://52.175.253.71:8080";
        RestAssured.basePath ="/brewery/rate";

    }
    @Test
    public void body_request_empty(){
        given()
            .contentType(ContentType.JSON)
            .body("")
        .when()
            .post().
        then()
            .statusCode(400);
    }

    @Test
    public void body_request_correct(){
        File file = new File("src/resources/bodyvalid.json");

        given()
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post().
        then()
            .statusCode(200)
                .extract().path("messages")
                .equals("[Um brinde. Sua avaliação foi adicionada com sucesso.]");
    }

    @Test
    public void body_request_incorrect(){
        File file = new File("src/resources/bodyincorrect.json");

        given()
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post().
        then()
            .statusCode(400)
                .extract().path("messages")
                .equals("[Não foi encontrado registros para a cervejaria informada.]");
    }

    @Test
    public void email_already_used(){
        File file = new File("src/resources/emailused.json");

        given()
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post().
        then()
            .statusCode(400)
                .extract().path("messages").equals("[Você já avaliou essa cervejaria.]");
    }

    @Test
    public void email_invalid(){
        File file = new File("src/resources/emailinvalid.json");

        given()
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post().
        then()
            .statusCode(400)
                .extract().path("messages")
                .equals("[Por favor inserir um email válido.]");
    }
    @Test
    public void brewery_id_invalid(){
        File file = new File("src/resources/breweryidinvalid.json");

        given()
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post().
        then()
            .statusCode(400)
                .extract().path("messages")
                .equals("[Não foi encontrado registros para a cervejaria informada.]");
    }
    @Test
    public void value_invalid(){
        File file = new File("src/resources/valueinvalid.json");

        given()
            .contentType(ContentType.JSON)
            .body(file)
        .when()
            .post().
        then()
            .statusCode(400)
                .extract().path("messages")
                .equals("[O valor da avaliação deve estar entre 1 e 5.]");
    }
    @Test
    public void method_invalid_put(){
            given()
            .when().
                put()
            .then()
                .statusCode(405)
                .body("error", Matchers.is("Method Not Allowed"));
    }
    @Test
    public void method_invalid_get(){
            given()
            .when().
                put()
            .then()
                .statusCode(405)
                    .body("error", Matchers.is("Method Not Allowed"));
    }
    @Test
    public void method_invalid_delete(){
            given()
            .when().
                put()
            .then()
                .statusCode(405)
                    .body("error", Matchers.is("Method Not Allowed"));
    }

}