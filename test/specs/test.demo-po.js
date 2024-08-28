import cartPage from "../pageobjects/cart.page";
import homePage from "../pageobjects/home.page";
import inventoryPage from "../pageobjects/inventory.page";
import loginPage from "../pageobjects/login.page";

describe('LoginTest', () => {
    it('Test 3 - Successful Login: Page Object Based', async () => {
        await loginPage.open();
        await loginPage.login("standard_user", "secret_sauce");
        await homePage.validateOnHomePage();
    });  
    it('Test 4 - Add Item to Cart: Page Object Based', async () => {
        await inventoryPage.open();
        await inventoryPage.addItemToCart();
        await browser.pause(3000);

        await inventoryPage.goToCart();
        await browser.pause(3000);

        await cartPage.validateCartItem('Sauce Labs Backpack');
    });  
});
