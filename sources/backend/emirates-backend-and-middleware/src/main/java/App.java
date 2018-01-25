import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;


@Configuration
@EnableAutoConfiguration
@ComponentScan(basePackages = {"services","repositories", "controllers"})
@EntityScan(basePackages = {"domain"}) 
public class App {

	public static void main(String[] args) throws Exception {
        SpringApplication.run(App.class, args);
    }
	
}
