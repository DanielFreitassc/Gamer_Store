
```markdown
# Anotações sobre o Spring Framework

## Introdução
As anotações são utilizadas no Spring para habilitar e configurar recursos de forma declarativa. O framework Spring detecta essas anotações durante o tempo de execução e toma ações com base nas configurações fornecidas.

## Anotações Principais

- `@RestController`: Marca uma classe como um controlador no padrão MVC (Model-View-Controller) do Spring.
- `@RequestMapping`: Especifica a URL que um método do controlador irá manipular.
- `@Autowired`: Injeta dependências automaticamente em uma classe.
- `@Component`: Marca uma classe como um componente gerenciado pelo Spring.
- `@Service`: Marca uma classe como um serviço do Spring, geralmente contendo a lógica de negócios.
- `@RestControllerAdvice`: Define um componente global para tratar exceções lançadas por controladores REST.

## Parâmetros dos Métodos do Controller

- `@PathVariable`: Injeta uma variável fornecida no path de uma requisição nos parâmetros do método do controller.
  Exemplo: `/user/12` ⇒ `@PathVariable String id`
- `@RequestBody`: Injeta o body de uma requisição nos parâmetros do método do controller.

## Spring JPA (Java Persistence API)

O Spring JPA oferece uma abordagem simplificada para trabalhar com persistência de dados em aplicações Java, sendo uma implementação da JPA.

### Configuração do Banco de Dados
```properties
spring.datasource.url=URL_ONDE_ESTÁ_RODANDO_SEU_DB
spring.datasource.username=NOME_USUARIO
spring.datasource.password=SENHA
```

### Entidades
```java
@Table(name = "foods")
@Entity(name = "foods")
@EqualsAndHashCode(of = "id")
public class Food {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Food(String id){
        this.id = id;
    }
}
```

### Repositório
```java
public interface UserRepository extends JpaRepository<User, String> {}

// Exemplos de métodos adicionais
// User findByLogin
// User findAllByActiveTrue
```

### Migrations (Flyway)
As migrações permitem gerenciar alterações na estrutura do banco de dados de forma controlada e rastreável.

Exemplo de migration para alterar uma tabela:
```sql
ALTER TABLE product ADD active BOOLEAN;
UPDATE product SET active = true;
```

### Exception Handlers
```java
@RestControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public void handle404(){
        // Tratamento da exceção
    }
}
```

### Resposta 201 - Created
Para enviar um `ResponseEntity` com o status code 201 para o cliente, é necessário incluir uma URI de acesso ao novo objeto criado. Exemplo:
```java
var uri = UriBuilder.path("/PATH_TO_ENTITY/{id}").buildAndExpand(NEW_ENTITY_ID).toUri();
return ResponseEntity.created(uri).body(newEntity);
```

Este é um resumo das anotações e conceitos apresentados no código fornecido.
```

Lembre-se de ajustar os detalhes conforme necessário. Espero que seja útil!
