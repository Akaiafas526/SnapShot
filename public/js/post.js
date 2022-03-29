
const formEl = document.querySelector('.formPic');
const inputEl = document.querySelector('.pictureInput');
const imageEl = document.querySelector('.previewImage');
const upload = document.querySelector('.upload');

const data = new FormData();
formEl.addEventListener('change',(e)=>{
    e.preventDefault()
    // console.log(e.target.files[0])
    const file = e.target.files
    console.log(file,file.length);
    if (file.length){
        const image = URL.createObjectURL(file[0])
        inputEl.style = `background-image: url(${image})`
        
    }
})


formEl.addEventListener('submit',(e)=>{
    e.preventDefault()
    if (upload.files.length){

        data.append('picture',upload.files[0])
        data.append('title',e.target[0].value)
        data.append('description',e.target[2].value)
        console.log(data)
        fetch('/api/post',{
            method:'POST',
            body:data
        }).then(res=>res.json()).then(data=>console.log(data))
    }
})