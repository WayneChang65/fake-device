/****************************************************/
//                    G E T                         //
/****************************************************/

/**
 * @swagger
 *
 * /api/milling/status:
 *   get:
 *     tags:
 *       - Milling
 *     description: 取得銑床控制器狀態
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 *
 * /api/milling/mode:
 *   get:
 *     tags:
 *       - Milling
 *     description: 取得銑床控制器目前模式
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 *
 * /api/milling/fname:
 *   get:
 *     tags:
 *       - Milling
 *     description: 取得銑床目前加工程式名稱
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 *
 * /api/milling/pos:
 *   get:
 *     tags:
 *       - Milling
 *     description: 取得銑床控制器所有座標(包含ABS, REL, MACH)
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 *
 * /api/milling/feedrate:
 *   get:
 *     tags:
 *       - Milling
 *     description: 取得銑床控制器的進給率(包含命令、目前、數值與百分比)
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

/**
 * @swagger
 *
 * /api/milling/spindleSpeed:
 *   get:
 *     tags:
 *       - Milling
 *     description: 取得銑床控制器的進給率(包含命令、目前、數值與百分比)
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: OK
 */

/****************************************************/
//                    P O S T                       //
/****************************************************/

/**
 * @swagger
 *
 * /api/milling/fname:
 *   post:
 *     tags:
 *       - Milling
 *     description: 設定銑床控制器加工程式名稱
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: fname
 *         description: 加工程式名稱
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: OK
 */