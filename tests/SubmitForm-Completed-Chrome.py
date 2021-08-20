from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from datetime import datetime

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
alert = driver.switch_to.alert

assert alert.text == "Submitted"

alert.accept()
time.sleep(2)

driver.switch_to.default_content

#Open Inventory List
inventoryList = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/aside/div/ul/li[1]/span[2]/a")
inventoryList.click()
time.sleep(2)

#Check for new submission on Inventory List
plusButton = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/section/main/div[2]/div/div/div/div/div/table/tbody/tr[1]/td[1]/button")
plusButton.click()
time.sleep(2)

submissionItem = driver.find_elements_by_xpath("//*[@id=\"container\"]/section/section/main/div[2]/div/div/div/div/div/table/tbody/tr[1]/td[2]")
submissionLocation = driver.find_elements_by_xpath("//*[@id=\"container\"]/section/section/main/div[2]/div/div/div/div/div/table/tbody/tr[1]/td[3]")
submissionDateAdded = driver.find_elements_by_xpath("//*[@id=\"container\"]/section/section/main/div[2]/div/div/div/div/div/table/tbody/tr[1]/td[4]")
submissionNotes = driver.find_elements_by_xpath("//*[@id=\"container\"]/section/section/main/div[2]/div/div/div/div/div/table/tbody/tr[2]/td/p")

dateToday = datetime.now()

assert submissionItem[0].text == "Test Item Name"
assert submissionLocation[0].text == "Test Location"
assert submissionDateAdded[0].text == dateToday.strftime("%B %d, %Y %H:%M %p")
assert submissionNotes[0].text == "Random Note"

driver.quit()