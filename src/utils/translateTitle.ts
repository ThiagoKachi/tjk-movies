export function translateTitle(title: string) {
  const pageTitle = title.slice(8);

  switch (pageTitle) {
  case '/explore':
    return 'Explorar filmes';
  case '/favorites':
    return 'Meus favoritos';
  case '/popular':
    return 'Filmes populares';
  case '/best-movies':
    return 'Melhores filmes';
  case '/releases':
    return 'Lançamentos';
  case '/action':
    return 'Ação';
  case '/adventure':
    return 'Aventura';
  case '/comedy':
    return 'Comédia';
  case '/drama':
    return 'Drama';
  case '/fantasy':
    return 'Fantasia';
  case '/science-fiction':
    return 'Ficção científica';
  case '/musical':
    return 'Musicais';
  case '/romance':
    return 'Romance';
  case '/horror':
    return 'Terror';
  default:
    break;
  }
}