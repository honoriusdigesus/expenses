package io.restapi.crud.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.sql.Timestamp;

@Entity
@Table(name = "tbl_profile")
@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class ProfileEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String profileId;
    private String name;
    @Column(unique = true)
    private String email;
    private String password;
    @Column(updatable = false) // Anotación que se encarga de que el campo no se pueda actualizar
    @CreationTimestamp // Anotación que se encarga de añadir la fecha de creación automáticamente
    private Timestamp createdAt;
    @UpdateTimestamp // Anotación que se encarga de añadir la fecha de actualización automáticamente
    private Timestamp updatedAt;

}
