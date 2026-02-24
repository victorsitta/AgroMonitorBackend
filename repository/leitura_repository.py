from database.connection import get_connection

def salvar_leitura(soja, feijao, milho, trigo):

    print("\n📥 Dados recebidos para salvar:")
    print("Soja:", soja)
    print("Feijao:", feijao)
    print("Milho:", milho)
    print("Trigo:", trigo)


    conn = get_connection()
    print("\n🔌 Conexão com banco aberta")

    cur = conn.cursor()

    print("\n📝 Executando INSERT...")
    cur.execute("""
    INSERT INTO leitura_test (soja, feijao, milho, trigo)
    VALUES (%s, %s, %s, %s) 
    """, (soja, feijao, milho, trigo))

    conn.commit()
    cur.close()
    conn.close()

