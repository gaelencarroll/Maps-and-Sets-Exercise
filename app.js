const myMap = new Map();
myMap.set(7,'seven');
myMap.set('7','seven string');

const empty = []
myMap.set(empty,'empty array');
myMap.set(true, 'Trueee!')

myMap.get(7)


const add = (x,y) => x + y;
const mult = (x,y) => x * y;

const funcCalls = new Map();
funcCalls.set(add,0);
funcCalls.set(mult,0);

funcCalls.set(add,1);
funcCalls.set(mult,9);

const bandData = [
    [3, '3 doors down'],
    ['three', 'three dog night'],
    ['nine', 'nine inch nails'],
    ['four', 'the four seasons'],
    [41, 'sum 41']
];
const bandMap = new Map(bandData);
bandMap.set(182, 'Blink 182').set('twenty','Matchbox Twenty');

bandMap.forEach((val,key) => {
    console.log(key + ' => ' + val);
})

for(let [key,value] of bandMap){
    console.log(key, ' = ', value)
}


const bannedHashTags = new Set(['nofilter','justsaying','winning','yolo']);
bannedHashTags.add('bestlife').add('yolo')

function filterHashtags(tags){
    const bannedHashTags = new Set(['nofilter','justsaying','winning','yolo']);
    return tags.filter((tag) => !bannedHashTags.has(tag))
}
const susansTags = ['happymonday', 'yolo', 'winning', 'sunset']


const ages = [12,13,14,14,15,21,22,22,10,24,12];
const agesSet = [...new Set(ages)];