import { Component, OnInit } from '@angular/core';
import { Company, Vacancy } from "./models";
import { CompanyService } from './services/company.service';
import { VacancyService } from './services/vacancy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'hh_front';
  companies: Company[] = [];
  new_company_name: string = '';
  new_company_description: string = '';
  new_company_city: string = '';
  new_company_address: string = '';
  add_company: boolean=false;

  vacancies: Vacancy[] = [];
  company_vacancies: Vacancy[] = [];
  showCompany_vacancies: boolean = false;
  
  
  constructor(private companyService: CompanyService, private vacancyService: VacancyService) {
  }

  ngOnInit() {
    this.companyService.getCompanies().subscribe((data: Company[]) => {
      this.companies = data;
    })

    this.vacancyService.getVacancies().subscribe((data: Vacancy[])=> {
      this.vacancies = data;
    })
  }

  addCompany(){
    this.companyService.createCompany(this.new_company_name, this.new_company_description, this.new_company_city, this.new_company_address).subscribe((data: Company) =>{
      this.companies.push(data);
      this.new_company_name = '';
      this.new_company_description = '';
      this.new_company_city = '';
      this.new_company_address = '';
    })
  }

  deleteCompany(company_id: number){
    this.companyService.deleteCompany(company_id).subscribe((data: any)=>{
      this.companies = this.companies.filter((company)=> company.id !== company_id);
    })
  }

  deleteVacancy(vacancy_id:number){
    this.vacancyService.deleteVacancy(vacancy_id).subscribe((data: any)=>{
      this.vacancies = this.vacancies.filter((vacancy) => vacancy.id !== vacancy_id);
    })
  }

  getCompanyVacancies(company: Company){
    this.showCompany_vacancies = !this.showCompany_vacancies;
    this.vacancyService.getCompanyVacancies(company.id).subscribe((data: Vacancy[])=> {
      this.company_vacancies = data;
    })
  }

}