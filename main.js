$(() => {
    $.get("https://www.reddit.com/r/aww/.json", (data) => {
    let img;
    let title;
    let url;
    $.each(data.data.children, (i) => {
       title =(data.data.children[i].data.title);
       img =(data.data.children[i].data.thumbnail);
       url = (data.data.children[i].data.url);

       console.log(title, img, url);   

       $('.posts-container').append(`<img src="${img}"></img><br><div id="title-container">${title}</div><br><div id="link-container">Link: ${url}</div><br>`);
        return i < 10;
    });

    
    });

});