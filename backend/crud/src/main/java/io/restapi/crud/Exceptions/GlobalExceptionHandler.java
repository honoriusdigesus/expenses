package io.restapi.crud.Exceptions;

import io.restapi.crud.io.ErrorObject;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


@RestControllerAdvice
@Slf4j //Anotación para el manejo de logs, esta se encarga de generar un logger de la clase
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
    @ResponseStatus(HttpStatus.NOT_FOUND)
    @ExceptionHandler(ResourceNotFoundException.class)
    public ErrorObject handleResourceNotFoundException(ResourceNotFoundException ex, WebRequest request) {
        log.error("[GlobalExceptionHandler] ResourceNotFoundException: {}", ex.getMessage());
        return ErrorObject.builder()
                .errorCode("DATA_NOT_FOUND")
                .statusCode(HttpStatus.NOT_FOUND.value())
                .message(ex.getMessage())
                .timestamp(new Date())
                .build();
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
                                                                  HttpHeaders headers,
                                                                  HttpStatusCode status,
                                                                  WebRequest request) {
        Map<String, Object> errorsResponse = new HashMap<>();
        List<String> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream().map(field->field.getDefaultMessage())
                .collect(Collectors.toList());
        errorsResponse.put("statusCode", HttpStatus.BAD_REQUEST.value());
        errorsResponse.put("message", errors);
        errorsResponse.put("timestamp", new Date());
        errorsResponse.put("errorCOde", "VALIDATION_FAILED");
        return new ResponseEntity<Object>(errorsResponse, HttpStatus.BAD_REQUEST);
    }
}
