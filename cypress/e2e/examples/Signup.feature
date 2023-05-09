Feature: Preencher dados na plataforma

    Scenario: Inserir dados de usuário no site
        Given Eu acesso a home page
        When Acesso a página de login
        And Insiro meu nome e e-mail
        Then Devo digitar meus dados