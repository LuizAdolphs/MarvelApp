import Services from '../../libs/Services';

test('Should retrieve some character', async () => {
    const result = await Services.GetCharacters("Hulk");

    expect(result.length).toBeGreaterThan(0);
})

test('Should retrieve some stories from character', async () => {
    const result = await Services.GetCharacters(1009367);

    expect(result.length).toBeGreaterThan(0);
})