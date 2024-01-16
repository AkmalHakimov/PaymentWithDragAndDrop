package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Payment {
    private Integer id;
    private PaymentType type;
    private Integer amount;
    public static Integer lastId = 0;

    public Payment(Integer id, PaymentType type, Integer amount) {
        this.id = id;
        this.type = type;
        this.amount = amount;
    }
}
