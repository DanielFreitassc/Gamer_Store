Anotações
As anotações são usadas para habilitar e configurar recursos específicos do Spring, permitindo que você defina o comportamento do seu aplicativo de maneira declarativa. O framework Spring detecta essas anotações durante o tempo de execução e toma as ações apropriadas com base nas configurações fornecidas.
@RestController: Usada para marcar uma classe como um controller no padrão MVC (Model-View-Controller) do Spring.
@RequestMapping: Especifica a URL que um método do controlador irá manipular. 
@Autowired: Utilizada para injetar dependências automaticamente em uma classe, permitindo que você obtenha uma instância de uma classe necessária sem criar manualmente.
@Component: Usada para marcar uma classe como um componente gerenciado pelo Spring.
@Service: Marca uma classe como um serviço do Spring, geralmente contendo a lógica de negócios do aplicativo.
@RestControllerAdvice:  É usado para definir um componente global que trata exceções lançadas por controladores REST.
Parâmetros dos métodos do controller
@PathVariable: Usada para injetar uma variável fornecida no path de uma requisição nos parâmetros do método do controller que foi chamado para tratar essa requisição
Exemplo: /user/12 ⇒ @PathVariable String id
@RequestBody: Usada para injetar o body de uma requisição nos parâmetros do método do controller que foi chamado para tratar essa requisição
Spring JPA
O Spring JPA (Java Persistence API) é uma sub-biblioteca do Spring  que oferece uma abordagem simplificada para trabalhar com persistência de dados em aplicações Java. Ele é uma implementação da JPA, uma especificação padrão da plataforma Java para mapeamento objeto-relacional (ORM) 
📌
Para usuários de Node JS podemos relacionar com o TypeORM ou Prisma
Precisamos adicionar a configuração do banco de dados no nosso application.properties
spring.datasource.url=URL_ONDE_ESTÁ_RODANDO_SEU_DB
spring.datasource.username=NOME_USUARIO
spring.datasource.password=SENHA
​
Entidades
As entidades JPA (Java Persistence API) são classes Java que representam objetos de domínio da nossa aplicação e são mapeadas para tabelas em um banco de dados relacional.
Exemplo: eu possuo uma tabela onde armazeno meus usuários e suas informações, então eu terei uma Entidade chamada User que representará os objetos dessa tabela (um usuário).
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
​
Repository
Com o Spring JPA podemos criar repositórios que serão as classes Java que usaremos para fazer consultas e inserções nas nossas tabelas no banco de dados
O padrão Repository separa a lógica de negócios da lógica de acesso a dados, fornecendo uma camada intermediária que encapsula as operações de leitura, gravação, atualização e exclusão de dados. Ele permite que o código da aplicação trabalhe com objetos de domínio e abstrai os detalhes de como os dados são armazenados e recuperados.
Para criar um repositório na nossa aplicação, basta estendermos a classe JpaRepository
public interface UserRepository extends JpaRepository<User, String> {}
​
Essa interface define métodos para realizar operações comuns de persistência, como salvar, buscar, atualizar e excluir objetos de domínio em um banco de dados.
Adicionando mais métodos
User findByLogin
User findAllByActiveTrue
​
Migrations
As migrações, no contexto de bancos de dados, são um conceito e uma prática para gerenciar as alterações na estrutura do banco de dados ao longo do tempo de maneira controlada e rastreável. As migrações permitem que você evolua o esquema do banco de dados de forma incremental e mantenha um histórico das alterações realizadas.
Para criar migrations na nossa aplicação usaremos o Flyway
Para criar uma migration basta criar um arquivo SQL dentro de:
projeto/main/resources/db/migration
O nome do arquivo deve respeitar a seguinte sintaxe:
VX__metodo-nome-tabela
Onde VX corresponde a versão do banco de dados que você está criando
Exemplo é a segunda migration que estou criando, então será V2
Metodo
Inserção, criação de tabela, update, drop etc
Nome tabela
Nome da tabela que você está manipulando
Exemplos: 
V3__update-table-foods
V9__create-table-user
V11__drop-table-user
Dentro desses arquivos colocamos o SQL puro mesmo que faz a mudança no seu DB
Exemplo de migration para alterar uma tabela
ALTER TABLE product ADD active BOOLEAN;
UPDATE product SET active = true;
​
Exception Handlers
Podemos criar classes que tratam exceções lançadas por nossos controllers ou outros componentes da aplicação através da notação @RestControllerAdvice
Dentro dessa classe, podemos criar diferentes métodos para tratar as exceções
E definimos qual a exceção tratada através da notação @ExceptionHandler
@RestControllerAdvice
public class ErrorHandler {
    @ExceptionHandler(EntityNotFoundException.class)
    public void Threat404(){
        //handle
    }
}
​
Exceções do JPA
Resposta 201 - Created
Para enviarmos um ResponseEntity com o status code 201 para nosso cliente, somos obrigados a enviar juntamente uma URI de acesso a esse novo objeto criado.
Para isso, nosso método post pode receber por parâmetro um Objeto chamado UriComponentsBuilder UriBuilder
E então podemos usar esse objeto para montar nossa URI que será enviada na resposta, como no exemplo a seguir:
var uri = UriBuilder.path("/PATH_TO_ENTITY/{id}").buildAndExpand(NEW_ENTITY_ID).toUri();

return ResponseEntity.created(uri).body(newEntity);
