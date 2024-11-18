
from common.enums.DatabaseType import DatabaseType
from common.serviceadapters.GoogleSheetDatabaseAdapter import GoogleSheetDatabaseAdapter


class DatabaseFactory:

    @staticmethod
    def get(database: str, databaseType: DatabaseType):
        if database == "googleSheet":
            return GoogleSheetDatabaseAdapter(databaseType)
