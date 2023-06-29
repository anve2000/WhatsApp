export const formatDate=(data)=>{
    const hours = new Date(data).getHours();
    const minutes = new Date(data).getMinutes();

    return `${hours<10?'0'+hours:hours}:${minutes<10?'0'+minutes:minutes}`;
}


export const downloadLink=async(e,originalImage)=>{
    e.preventDefault();

    try{
        fetch(originalImage).then(res=>res.blob()).then(blob=>{
            const url =  window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display='none';
            a.href=url;

            const nameSplit = originalImage.split('/');
            const duplicateName = nameSplit.pop();
            a.download=''+duplicateName+'';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
        }).catch(e=>console.log('Error while downloading the image ',e.message));
    }
    catch(e){
        console.log('Error while downloading the image ',e.message)
    }
}