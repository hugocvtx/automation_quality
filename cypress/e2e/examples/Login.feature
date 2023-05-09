Feature: Login automação 

    Scenario: Colocar login errado no site
        Given Eu acesso a home page
        When Acesso a página de login
        And Digito dados inválidos
        Then Deve aparecer mensagem de erro