import { makeAutoObservable } from "mobx";

interface CustomerProps {
    id: string;
    uniq: string;
    userId: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    active: boolean;
}
class CustomerData { 

    data: CustomerProps[] = [];
    singleData: CustomerProps;

    constructor() {
    
        makeAutoObservable(this)
        
    }

    async getCustomsers() {
        try {
          const res = await fetch("http://localhost:3000/api/customers")
        this.data = await res.json()
        } catch (error) {
          console.log(error)
        }
      }

    async getOne(id) {
      try {
        const res = await fetch("http://localhost:3000/api/customers/"+id)
        this.singleData = await res.json()
      } catch (error) {
        
      }
    }
  
      async addCustomer(name, email, phone, address,active) {
        const uniq = Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2);
        try {
          const res = fetch("http://localhost:3000/api/customers",
            {
              body: JSON.stringify({
                  uniq: uniq,
                  userId: "user1",
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
                  active: active === "1"? true : false
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'POST'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
      async updateCustomer(name, phone, email, address,active, id) {
        try {
          const res = fetch("http://localhost:3000/api/customers/"+id,
            {
              body: JSON.stringify({
                  name: name,
                  phone: phone,
                  email: email,
                  address: address,
                  active: active === "1"? true : false
              }),
              headers: {
                'Content-Type': 'application/json'
              },
              method: 'PUT'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
      async delete(id) {
        try {
          const res = fetch("http://localhost:3000/api/customers/"+id,
            {
              method: 'DELETE'
            })
            
        } catch (error) {
          console.log(error)
        }
      }
}
export const CustomerDatas = new CustomerData();