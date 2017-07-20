Feature: hometask

	Scenario: finding Iphone 6s in the catalog
	    Given I am on the onliner home page				
	    When I click on "Каталог" link					
	    Then I should see "Каталог"	

	    When I click on "Мобильные телефоны" link		
	    Then I should see "Мобильные телефоны"	

	    When I click on "Apple" filter
	    	And I click on "Apple iPhone 6s" item
	    Then I should see "Apple iPhone 6s"


	Scenario: comparing iPhone 6s with iPhone SE
		Given I am on the onliner home page
		When I click on "Каталог" link
			And I click on "Мобильные телефоны" link
			And I click on "Apple" filter
			And I click on "Apple iPhone 6s" item
			And I add item to comparison
		Then I should see comparison bar
		When I click on "Apple" link
	 		And I click on "Apple iPhone SE" item    
	  	Then I should see "Apple iPhone SE"    
	  	When I add item to comparison
	  	Then I should see comparison bar
	  	When I click on comparison bar
	  	Then I should see that "iPhone 6s" is better than "iPhone SE"  
	  	When I delete items from comparison   
	  	Then I should see "Каталог"