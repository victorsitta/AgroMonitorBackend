from database.connection import get_connection
from datetime import datetime

def salvar_leitura(soja, feijao, milho, trigo):

    data_hora_atual = datetime.now()


    conn = get_connection()

    if(not conn):
        print("\n Falha ao conectar ao banco de dados")
        return
    
    print("\n🔌 Conexão com banco aberta")

    try:
        with conn.cursor() as cur:
            print("\n Executando INSERT...")
            cur.execute("""
            INSERT INTO readings (soja, feijao, milho, trigo, data_leitura)
            VALUES (%s, %s, %s, %s, %s) 
            """, (soja, feijao, milho, trigo, data_hora_atual))
        
        conn.commit()
        print("\n Leitura salva com sucesso!")

    except Exception as e:
        print("\n Erro ao salvar leitura:", e)
        conn.rollback()

    finally:
        cur.close()
        conn.close()
        print("🔌 Conexão encerrada.")
