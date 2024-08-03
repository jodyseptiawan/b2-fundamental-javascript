// ketika Klik Button
// 1. ambil dari dari form (name, email, message)
// 2. jadikan object dan simpan ke variabel
// 3. console.log object tersebut 

const contacts = [];

const handleSubmit = () => {
    // Ambil element
   const nameElement =  document.getElementById("input-name");
   const emailElement =  document.getElementById("input-email");
   const messageElement =  document.getElementById("input-message");

    // Ambil Value dari element
   const nameInput = nameElement.value;
   const emailInput = emailElement.value;
   const messageInput = messageElement.value;

    // Jadikan object
    const contact = {
        name: nameInput,
        email: emailInput,
        message: messageInput
    }

   contacts.push(contact);

   handleShowData();
}

const handleShowData = () => {
    const tbodyElement = document.getElementById("table-body")

    let contactElementInner = "";
    
    contacts.forEach((item, idx) => {
        contactElementInner += `<tr>
            <td class="border text-center px-1">${idx + 1}</td>
            <td class="border text-left px-1">${item.name}</td>
            <td class="border text-left px-1">${item.email}</td>
            <td class="border text-left px-1">${item.message}</td>
            </tr>`
    })
        

     tbodyElement.innerHTML = contactElementInner
}

const handleDelete = (index) => {

}