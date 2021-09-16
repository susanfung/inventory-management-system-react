import time
from selenium.webdriver.common.by import By

def submitForm(driver):
  submit = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/section/main/button/span")
  submit.click()
  time.sleep(2)