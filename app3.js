let templateString = 'Hello, {{city}} {{age}}! #{{name}}'
let user1 = {id:1, name:'john', age:123, city:'kyiv'};
let user2 = {id:2, name:'alex', age:55, city:'lviv'};

let compile = function (template) {
    return function (obj) {
        let posCity = template.indexOf('{{city}');
        let posAge = template.indexOf('{{age}');
        let posName = template.indexOf('#{{name}');
        let str = `${template.slice(0,6)} ${obj.name} from ${obj.city} having ${obj.age} years old `;
        let div = document.createElement('div');
        div.id = `user${obj.id}`;
        div.textContent = str;
        document.body.appendChild(div);
        return str;
    };
}

let template = compile(templateString);

console.log(template(user1)); // => Hello, john!
console.log(template(user2)); // => Hello, alex!



