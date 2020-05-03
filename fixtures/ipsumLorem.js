const fullText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis pulvinar tincidunt. Aliquam suscipit mauris nulla, ac faucibus massa finibus ac. Aliquam ultricies mauris hendrerit aliquet ultrices. Integer nec erat quis erat faucibus pellentesque. Fusce ac arcu vel odio dictum efficitur id et purus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce ante libero, gravida ac nisl id, pulvinar placerat massa. Vivamus justo libero, fringilla ac ante quis, laoreet eleifend ipsum. Sed suscipit lorem diam, ac cursus sem tincidunt sed. Donec ultrices erat ut nisl tincidunt tincidunt. Pellentesque velit felis, sodales in pretium quis, convallis vel leo. Etiam eu blandit nisi. Nam faucibus, tortor non tempus ultricies, urna odio feugiat dui, sed bibendum nisi diam eget velit. In luctus vehicula erat, in varius nulla vestibulum vel. Ut vel mi quis nisi varius pretium. Duis eleifend est in risus facilisis, sed finibus eros tristique. Integer vitae vulputate diam. Sed eget massa sed diam luctus efficitur. Nullam orci massa, ultrices sit amet imperdiet quis, ultricies consequat nunc. Nam vitae quam et odio sagittis maximus. Aenean varius viverra orci et egestas. Cras pulvinar accumsan mi, nec hendrerit ex interdum eu. Morbi viverra, ex sit amet cursus condimentum, risus diam dictum tortor, vitae pellentesque tortor felis ac velit. Mauris volutpat dui eget nunc sagittis, vel tincidunt ex elementum. Nunc in odio aliquam, elementum nulla ac, vulputate est. Proin quis ullamcorper eros. Nam vel ligula non turpis condimentum molestie eget nec neque. Phasellus in tortor sed felis imperdiet imperdiet ut id neque. Ut molestie massa vel ultricies finibus. Ut accumsan metus nisl, at placerat velit mattis quis. Aenean ut elit varius odio laoreet ullamcorper eget at augue. Donec at hendrerit nisl. Nulla facilisis risus sem, sed facilisis ante pulvinar vel. Morbi ornare hendrerit magna, ac pretium ipsum rutrum nec. Morbi sed enim quis arcu laoreet gravida sed nec tortor. Ut malesuada justo tellus, eget luctus nunc aliquam et. Quisque sed pretium sem. Nam et ex quis quam malesuada dictum id sed justo. Vestibulum blandit elementum nisl vitae tempus. Curabitur elementum, massa eu sagittis fringilla, arcu sem feugiat risus, non imperdiet eros ipsum id mi. Quisque bibendum et neque sed iaculis. Sed sit amet ipsum quis magna efficitur fringilla. Integer mauris ipsum, feugiat nec sem at, commodo maximus velit. Suspendisse non enim nec metus mattis vestibulum. Fusce semper aliquet lacus, ut dictum nisl. Pellentesque tristique aliquam ipsum aliquet egestas. Proin nec varius lorem, nec consectetur neque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aenean suscipit, leo ac lacinia dignissim, neque mauris fringilla justo, eget vehicula justo velit ac nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ac commodo nisl. Aliquam accumsan imperdiet tortor in bibendum. Duis non venenatis diam. Vivamus auctor turpis eget leo pellentesque pretium. Sed in diam nibh. Nulla ac vestibulum nisi. Morbi quis rutrum ante. Donec id nisl non ligula bibendum egestas. Nam in consequat enim. Nam auctor tincidunt viverra. Aliquam tincidunt ullamcorper malesuada.`

const wordsList = fullText.replace(/\./, '').split(' ')

const randomIndices = () => {
  const wordCount = Math.ceil(Math.random() * 9) + 1
  
  let counter = 1
  const result = []
  const ipsumLength = wordsList.length
  while (counter <= wordCount) {
    const randomIndex = Math.round(Math.random(ipsumLength - 1))
    result.push(randomIndex)
    counter++
  }
}

export const randomWords = customIndices => {
  const indices = customIndices || randomIndices()

  return indices.map(ipsumIndex => wordsList[ipsumIndex])
}