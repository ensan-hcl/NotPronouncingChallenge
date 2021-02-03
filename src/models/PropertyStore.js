//  データストア
var PropertyStore = {
    debug: true,
    state: {
        property: {
            type: '1',
            word: ''
        }
    },
    validate () {    
        if (this.state.property.word.length == 0) {
          throw new Error('1文字以上入力してください')
        }

        const englishMatch = this.state.property.word.match(/[a-zA-Z]/gi)
        if (englishMatch === null){
            throw new Error('英単語を入力してください')
        }

        const data = this.state.property.word.match(/[^a-zA-Z \'\.,']/gi)
        if (data){
            throw new Error('英単語を入力してください')
        }
        return true
    },

    result (word) {
        let result = []
        for(const _letter of word){
            const letter = _letter.toLowerCase()
            if(![" ", "\'", ".", ","].includes(letter)){
                if(reasons[letter].length == 0){
                    result.push(`${letter}は発音せざるを得ません`)
                }else{
                    const reason = reasons[letter][Math.floor(Math.random() * reasons[letter].length)]
                    result.push(`${letter}は${reason}の${letter}です`)
                }
            }
        }
        if(!word.includes("v")){
            result.unshift(`🎉${word}を発音しないチャレンジ成功です🎉`)
            return result
        }else{
            result.unshift(`💥${word}を発音しないチャレンジ失敗です💥`)
            return result
        } 
    }
    
}
export default PropertyStore


const reasons = {
    "a": [
            "logically(ˈlɒdʒɪkli)",
            "aesthetic(ɛsˈθɛdɪk)",
            "aisle(aɪl)"
    ],
    "b": [
        "bomb(bɑm)",
        "climb(klaɪm)",
        "thumb(θəm)",
        "debt(dɛt)"
    ],
    "c": [
        "muscle(ˈməsəl)",
        "indict(ɪnˈdaɪt)"
    ],
    "d": [
        "Wednesday(ˈwɛnzdeɪ)",
        "handsome(ˈhænsəm)"
    ],
    "e": [
        "date(deɪt)",
        "imagine(ɪˈmædʒən)",
        "leave(liv)"
    ],
    "f": [
        "halfpenny(ˈheɪpni)"
    ],
    "g": [
        "gnosis(ˈnoʊsəs)",
        "sign(saɪn)"
    ],
    "h": [
        "hour(ˈaʊr)",
        "honest(ˈɑnəst)",
        "ghost(ɡoʊst)"
    ],
    "i": [
        "business(ˈbɪznəs)",
        "suit(sut)"
    ],
    "j": [
        "marijuana(ˈmɛrəˈwɑnə)"
    ],
    "k": [
        "know(noʊ)",
        "knight(naɪt)"
    ],
    "l": [
        "walk(wɔk)",
        "would(wʊd)",
        "half(hæf)"
    ],
    "m": [
        "mnemonic(nəˈmɑnɪk)"
    ],
    "n": [
        "autumn(ˈɔdəm)",
        "solemn(ˈsɑləm)"
    ],
    "o": [
        "leopard(ˈlɛpərd)",
        "jeopardy(ˈdʒɛpərdi)",
    ],
    "p": [
        "receipt(rəˈsit)",
        "psychology(saɪˈkɑlədʒi)",
        "coup(ku)"
    ],
    "q": [
        "lacquer(ˈlækər)"
    ],
    "r": [
        "comfortable(ˈkəmftərbəl)",
        "February(ˈfɛbuˌɛri)",
        "forecastle(ˈfoʊksəl)"
    ],
    "s": [
        "island(ˈaɪlənd)",
        "apropos(ˌæprəˈpoʊ)",
        "isle(aɪl)"
    ],
    "t": [
        "ballet(bæˈleɪ)",
        "debut(deɪˈbju)",
        "whistle(ˈwɪsəl)"
    ],
    "u": [
        "dialogue(ˈdaɪəˌlɑɡ)",
        "tongue(təŋ)"
    ],
    "v": [],
    "w": [
        "write(raɪt)",
        "sword(sɔrd)",
        "who(hu)"
    ],
    "x": [
        "faux pas(ˌfoʊ ˈpɑ)",
        "grand prix(ˌɡrænd ˈpri)"
    ],
    "y": [
        "beyond(biˈɑnd)",
    ],
    "z": [
        "rendezvous(ˈrɑndəˌvu)"
    ]
}
