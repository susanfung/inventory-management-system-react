import unittest
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time
from selenium.webdriver.common.by import By

from SubmitForm import submitForm

driver = webdriver.Chrome(ChromeDriverManager().install())

def setUpModule():
  #Open Inventory Management App
  driver.get("http://localhost:3000/")

def tearDownModule():
  #Close Inventory Management App
  driver.quit()

class TestSuites(unittest.TestCase):
  @classmethod
  def setUp(self):
    #Open Add New Inventory Form
    addNewInventory = driver.find_element(By.XPATH, "//*[@id=\"container\"]/section/aside/div/ul/li[2]/span[2]/a")
    addNewInventory.click()
    time.sleep(2)

  def test_SubmitBlankForm(self):
    submitForm(driver)
    numberOfErrorTexts = driver.find_elements_by_xpath("//*[contains(text(), 'This information is required.')]")
    self.assertTrue(len(numberOfErrorTexts) == 2)

if __name__ == "__main__":
  unittest.main()