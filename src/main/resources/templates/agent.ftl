<!DOCTYPE html>
<html lang="en">

<head>

</head>

<body>
<script type="text/javascript">
    var b_iframe = window.parent.parent.document.getElementById("Iframe");
    var hash_url = window.location.hash;
    if (hash_url.indexOf("#") >= 0) {
        var hash_width = hash_url.split("#")[1].split("|")[0] + "px";
        var hash_height = hash_url.split("#")[1].split("|")[1] + "px";
        b_iframe.style.width = hash_width;
        b_iframe.style.height = hash_height;
    }
</script>
</body>
</html>