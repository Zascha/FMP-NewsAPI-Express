var fileReadWrite = require('./fileReadWriteModule');
const dataFilePath = './data/news.json';

module.exports.getNewsList = function() {
    return getNewsList(dataFilePath);
}

module.exports.getNewsById = function(id) {
    return getNewsById(id);
}

module.exports.getNewsByCategory = function(category) {
    return getNewsByCategory(category);
}

module.exports.addToNewsList = function(news) {
    if (!isNewsValid(news)) {
        throw Error("Invalid passed news");
    }

    if(doesNewsExist(news.id)){
        throw new Error("News already exists, id=" + news.id);
    }

    var newsList = getNewsList();
    newsList.push(news);    
    fileReadWrite.writeToFile(dataFilePath, JSON.stringify(newsList));
}

module.exports.deleteFromNewsList = function(id) {
    if(!doesNewsExist(id)){
        throw new Error("News to delete does not exists, id=" + id);
    }

    var newsList = getNewsList();
    var updatedNewsList = newsList.filter(n => n.id != id);    
    fileReadWrite.writeToFile(dataFilePath, JSON.stringify(updatedNewsList));
}

function getNewsList() {
    return fileReadWrite.readFromFile(dataFilePath);
}

function getNewsById(id) {
    return fileReadWrite.readFromFile(dataFilePath).filter(n => n.id == id);
}

function getNewsByCategory(category) {
    return fileReadWrite.readFromFile(dataFilePath).filter(n => n.category == category);
}

function isNewsValid(news) {
    return news.id && parseInt(news.id) > 0;
}

function doesNewsExist(newsId){
    return getNewsById(newsId).length !== 0;
}