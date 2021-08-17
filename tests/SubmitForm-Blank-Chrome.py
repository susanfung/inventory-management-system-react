from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome(ChromeDriverManager().install())

#Open Inventory Management App
driver.get("http://localhost:3000/")

#Open Add New Inventory Form
addNewInventory = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/aside/div/ul/li[2]/span[2]/a")
addNewInventory.click()
time.sleep(2)

#Submit Blank Form
submit = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/section/main/button/span")
submit.click()
time.sleep(2)

#Check for form error messages
numberOfErrorTexts = driver.find_elements_by_xpath("//*[contains(text(), 'This information is required.')]")

assert len(numberOfErrorTexts) == 2

driver.quit()