package com.example.demo.AnnualTrainingPlan;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AllAnnualPlanRepository extends JpaRepository<AllAnnualPlan,Long> {
    AllAnnualPlan findByYear(long year);
}
