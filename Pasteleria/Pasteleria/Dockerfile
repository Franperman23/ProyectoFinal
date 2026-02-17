# Paso 1: Usamos una imagen de Java 21 (que es la que usas en tu proyecto)
FROM eclipse-temurin:21-jdk

# Paso 2: Creamos una carpeta de trabajo dentro del contenedor
WORKDIR /app

# Paso 3: Copiamos el archivo .jar que genera Maven a la imagen
# Asegúrate de haber hecho el 'mvn clean package' antes
COPY target/*.jar app.jar

# Paso 4: Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]