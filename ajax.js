$(document).ready(function()
{
        $("#submit").click(function()
        {
                $("#erconts").fadeIn(500);
                $.ajax(
                {
                        type: "POST",
                        url: "send.php", // Адрес обработчика
                        data: $("#callbacks").serialize(),
                        error:function()
                        {
                                $("#erconts").html("Произошла ошибка!");
                        },
                        beforeSend: function()
                        {
                                $("#erconts").html("Отправляем данные...");
                        },
                        success: function(result)
                        {
                                $("#erconts").html(result);
                                checkThis();
                        }
                });
        return false;
        });
});
$(document).ready(function()
{
        $("#submit-mini").click(function()
        {
                $("#erconts-mini").fadeIn(500);
                $.ajax(
                {
                        type: "POST",
                        url: "send.php", // Адрес обработчика
                        data: $("#callbacks-mini").serialize(),
                        error:function()
                        {
                                $("#erconts-mini").html("Произошла ошибка!");
                        },
                        beforeSend: function()
                        {
                                $("#erconts-mini").html("Отправляем данные...");
                        },
                        success: function(result)
                        {
                                $("#erconts-mini").html(result);
                                checkThis();
                        }
                });
        return false;
        });
});
