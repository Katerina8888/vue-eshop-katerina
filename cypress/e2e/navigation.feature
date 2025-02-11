Feature: Navigation
    Navigating different pages of the application
# oranžový je název nebo komentář, nemá to vliv na to, co se bude dít. 
# Background a beforeeach je to stejné
    Background: the user visit the home page
    # given je předpoklad něčeho, co se stane před každým scénářem, 
    # v uvozovkách jsou proměnné
    # potom, co tento test přepíšeš do common.steps.ts, 
    # tak by neměl být podtržený žlutě. Pokud je, je někde chyba nebo je potřeba reloadovat okno
        Given the user is on the "/store" page
    # scenario je to stejné, jako it
    Scenario: The user can navigate to the orders pages
    # tento string musí odpovídat regexu v common.steps.ts
        When the user clicks on the "Orders" navigation link
        # můžeš si dát ctrl a jet po slovech a ukáže ti, kde je to implementované
        Then the url should contain "/orders"
        And the user should not see "Total 0 euro" displayed on the page