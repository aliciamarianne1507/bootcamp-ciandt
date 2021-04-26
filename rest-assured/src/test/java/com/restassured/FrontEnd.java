package com.restassured;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

public class FrontEnd {
    private WebDriver driver;

    @Before
    public void  variables(){
        driver = new FirefoxDriver();
        driver.get("http://localhost:3000/");
    }

    @Test
    public void validCity(){
        Assert.assertEquals("Breweries",driver.getTitle());
        String text = "San Diego";
        WebElement input = driver.findElement(By.className("inputSearch"));
        input.clear();
        input.sendKeys(text);
        driver.findElement(By.className("buttonSearch")).click();

    }
}
