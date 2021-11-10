package pageObject;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class demoShopHomePage {

    WebDriver driver;

    By buyNow = By.xpath("//*[text()='Buy now!']/following-sibling::div/div[2]/div");

    By addToCart = By.xpath("//*[text()='Add to cart']/following-sibling::div/div[2]/div");

    By viewProducts = By.xpath("//*[text()='View products']/following-sibling::div/div[2]/div");

    By selectOptions = By.xpath("//*[text()='Select options']/following-sibling::div/div[2]/div");

    public demoShopHomePage(WebDriver driver){
        this.driver=driver;
    }

    public void iAddFourDifferentProductsToMyWishlist() throws InterruptedException {
        driver.findElement(buyNow).click();
        Thread.sleep(3000);
        driver.findElement(addToCart).click();
        Thread.sleep(3000);
        driver.findElement(viewProducts).click();
        Thread.sleep(3000);
        driver.findElement(selectOptions).click();
        Thread.sleep(3000);
        System.out.println("I added four items to my WishList");
    }

}
