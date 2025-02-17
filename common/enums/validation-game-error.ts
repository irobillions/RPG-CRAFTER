export enum ValidationGameError {
    MissingName = 'Le nom de jeu est manquant',
    MissingDescription = 'La description de jeu est manquante',
    ExistingName = 'Un jeu avec ce nom existe déjà',
    MapValidationDoor = 'Les portes ne doivent pas etre entre deux murs',
    MapValidationFieldCover = 'Plus de 50% de la carte doit etre couverte par des tuiles de terrain',
    MapValidationFieldBlock = "Il y'a des parties de la carte qui ne sont pas accesibles car bloqués par des murs",
    MapValidationStartPointMissing = 'Des points de depart sont manquants, tous les points de depart doivent etre posé sur la Map',
    MissingGame = "Le jeu que vous tentez de modifier n'existe plus ou été supprimé",
    MapNotAllConnected = "La carte n'est pas connectée totalement, des tuiles de terrains sont inaccesibles",
    DoorNotValid = 'Un ou plusieurs murs ne soht pas bien placés autour des portes',
    NotEnoughWalkableTile = "Il n'y a pas assez de tuiles de terrain",
    NotAllStartPointOnMap = "Il n'y a pas tous les points de depart sur la carte",
    NotAllItemsOnMap = "Le nombre d'items dans la map n'est pas correct.",
    FlagAreNotPlaceOnTheMap = "Le drapeau n'est pas placé sur la carte. Il faut un drapeau",
}
