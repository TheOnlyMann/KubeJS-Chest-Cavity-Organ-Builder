//Main
onEvent('recipes', event => {
    function salvage(output,input){
        event.custom({
            type: 'chestcavity:crafting_salvage',
            ingredient: Item.of(input).toJson(),
            required: Item.of(input).count,
            result: Item.of(output).id,
            count: Item.of(output).count
        })
    }
    function sausageCooking(output,input){//adds sausage -> cooked sausage cooking recipes
        event.smelting(output,input).xp(0.35)
        event.smoking(output,input).xp(0.35)
        event.campfireCooking(output,input).xp(0.35)
    }
    function sausageMaking(output,input){//makes 8 input + sausage skin into output
        event.shapeless(output, [`8x ${input}`, 'chestcavity:sausage_skin'])
    }
    //salvage('minecraft:stone', '2x minecraft:cobblestone')
})