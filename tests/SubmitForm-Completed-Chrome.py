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
employeeTime = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/aside/div/ul/li[2]/span[2]/a")
employeeTime.click()
time.sleep(2)

#Complete Add New Inventory  Form
itemName = driver.find_element(By.ID, "itemName")
location = driver.find_element(By.ID, "location")
notes = driver.find_element(By.ID, "notes")

itemName.send_keys("Test Item Name")
location.send_keys("Test Location")
notes.send_keys("Random Note")
time.sleep(2)

#Submit Form
submit = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/section/main/button/span")
submit.click()
time.sleep(2)

#Accept Alert Message
driver.switch_to.alert.accept()
time.sleep(2)

driver.quit()