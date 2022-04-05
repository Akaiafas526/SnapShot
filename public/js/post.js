const formEl = document.querySelector('.formPic');
const inputEl = document.querySelector('.pictureInput');
const imageEl = document.querySelector('.previewImage');
const upload = document.querySelector('.upload');
const validFileTypes = ['png','jpg','gif','jpeg']
const data = new FormData();
const tagEl = document.querySelectorAll('.tags');



// Checks for picture extension
function checkExtension (file) {
    const fileExt = file.name.split('.')
    if (!validFileTypes.includes(fileExt[fileExt.length-1].toLowerCase())){
        alert('INVALID FILE TYPE')
        return false
    }
    return true
}


// Sets file input drop area background to the picture selected
formEl.addEventListener('change',(e)=>{
    e.preventDefault()
    const file = e.target.files
   
    if (file?.length){
        const picture = checkExtension(file[0])
        if (!picture){
            return
        }
        const image = URL.createObjectURL(file[0])
        inputEl.style = `background-image: url(${image})`
    }
    else if (file?.length===0){
        inputEl.style = `background-image: url(/images/dropzone.png)`

    }
})




formEl.addEventListener('submit',async (e)=>{
    e.preventDefault()
    if (upload.files.length){

        // checks for valid picture extension
        const picture = checkExtension(upload.files[0])

        // Adds data to formData
        if (picture){
            data.append('picture',upload.files[0])
            data.append('title',e.target[0].value)
            data.append('description',e.target[2].value)
            data.append('tagId',e.target[3].value)
           
            const response = await fetch('/api/post',{
                method:'POST',
                body:data
            })
            if (response.ok){
                document.location.assign('/');
            }
            else {
                console.log('Unable to add file')
            }

        }
    }
})

// Changes route based on tag selected
tagEl[0].addEventListener('change',(e)=>{
    e.preventDefault()
    
    if (e.target.value==='all'){
        window.location.assign('/')
    } else {
        window.location.assign(`/tag/${e.target.value}`)
    }
})